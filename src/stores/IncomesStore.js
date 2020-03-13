import { action, autorun, computed, decorate, observable } from "mobx";
import client from "../utils/http";
import isWithinInterval from "date-fns/isWithinInterval";
import { getInterval, Periods } from "../utils/period";
import Storage from "../utils/storage";

const incomesURL =
  "https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js";
const SELECTED_PERIOD_KEY = "selectedPeriod";

class IncomesStore {
  incomes = [];
  selectedPeriod = Storage.read(SELECTED_PERIOD_KEY) ?? Periods.ALL;

  constructor() {
    client.get(incomesURL).then(incomes => this.incomes.replace(incomes));
  }

  get filteredIncomes() {
    switch (this.selectedPeriod) {
      case Periods.ALL:
        return this.incomes;
      default:
        return this.incomes.filter(([date]) =>
          isWithinInterval(new Date(date), getInterval(this.selectedPeriod))
        );
    }
  }

  setFilter = newFilter => {
    this.selectedPeriod = newFilter;
  };
}

decorate(IncomesStore, {
  incomes: observable,
  selectedPeriod: observable,
  filteredIncomes: computed,
  setFilter: action
});

let incomesStore = new IncomesStore();

autorun(() => {
  Storage.write(SELECTED_PERIOD_KEY, incomesStore.selectedPeriod);
});

export default incomesStore;
