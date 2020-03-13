import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(value) {
  return format(value, "dd MMM yyyy", { locale: ptBR });
}
