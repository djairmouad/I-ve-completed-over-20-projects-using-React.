import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    let message = "An unexpected error occurred";

    if (error?.status === 404) {
        if (typeof error.data === 'string') {
            try {
                const errorData = JSON.parse(error.data);
                message = errorData.message || message;
            } catch (e) {
                console.error("Failed to parse error data:", e);
            }
        } else if (typeof error.data === 'object' && error.data !== null) {
            message = error.data.message || message;
        }
    }

    console.log(message);

    return (
        <PageContent title="An error occurred">
            <p>{message}</p>
        </PageContent>
    );
}
