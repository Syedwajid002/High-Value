// components/VisitCounter.tsx
import React, { useEffect, useState } from "react";
import countapi from "countapi-js";

const VisitCounter: React.FC = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        countapi
            .hit("hvrasolutions.com", "visits") // replace with your namespace and key
            .then((result) => {
                setCount(result.value);
            })
            .catch((error) => {
                console.error("CountAPI error:", error);
            });
    }, []);

    return (
        <div className="text-center text-sm text-gray-600 mt-4">
            {count !== null ? (
                <>
                    🌐 Total visits: <span className="font-semibold">{count}</span>
                </>
            ) : (
                "Loading visit count..."
            )}
        </div>
    );
};

export default VisitCounter;
