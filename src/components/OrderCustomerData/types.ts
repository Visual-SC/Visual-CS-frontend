import type { OrderInitial } from "../../types/order-env";


export type OrderCustomerDataProps = Pick<OrderInitial, 'cliente' | 'numero_mesa'>;

export type OrderCustomerDataComponentProps = {
  onSubmit?: (data: OrderCustomerDataProps) => void;
};

