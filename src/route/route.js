import NotFound from "componentns/NotFound";
import TaskTimer from "containers/TaskTimer";
import Info from "componentns/Tasks/Info";

const routes = [
    {
        exact: true,
        path: "/",
        component:TaskTimer
    },
    {
        exact: false,
        path: "/task/:id"
    }
    
]