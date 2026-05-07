import { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useUiStore } from "../../stores/uiStore";

const AUTO_HIDE_MS = 1200;

const OrderAddedToast: React.FC = () => {
  const visible = useUiStore((state) => state.addedToastVisible);
  const toastId = useUiStore((state) => state.addedToastId);
  const payload = useUiStore((state) => state.addedToastPayload);
  const hide = useUiStore((state) => state.hideAddedToast);

  useEffect(() => {
    if (!visible) return;

    const timeoutId = window.setTimeout(() => {
      hide();
    }, AUTO_HIDE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [visible, toastId, hide]);

  if (!visible || !payload) return null;

  return (
    <div
      className="fixed top-4 left-11/12 -translate-x-11/12 z-50"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="bg-light-blue rounded-xl border border-glacier-blue px-4 py-3 w-85">
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-black truncate max-w-35">
            {payload.nombre}
          </span>
          <span className="text-gray-700 font-semibold whitespace-nowrap">
            x{payload.cantidad}
          </span>
          <span className="font-antonio text-black whitespace-nowrap">
            {formatPrice(payload.total || 0)}
          </span>
          <span className="text-gray-700 font-semibold whitespace-nowrap">
            Agregado
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderAddedToast;
