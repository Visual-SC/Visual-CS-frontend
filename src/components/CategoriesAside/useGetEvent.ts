import { useEffect, useState } from "react";
import { useEventStore } from "../../hooks/useEvent";

export const useGetEvent = () => {
    const { event, getEvent } = useEventStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEvent("6a0b9efaa5e73d57d9982b26").finally(() => setLoading(false));
    }, [getEvent]);

    return { event, loading };
};