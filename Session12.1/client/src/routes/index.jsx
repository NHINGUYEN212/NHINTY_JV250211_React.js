import { createBrowserRouter, Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import { Spin } from "antd";

const LibraryManager = React.lazy(() => import("../pages/library-manager"));

const RootLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Spin size="large" />}>
                        <LibraryManager />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default routers;
