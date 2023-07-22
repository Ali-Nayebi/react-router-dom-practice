import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/", {}) // we can also put navigate(-1) which act as a back button and navigates us to the previows url
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <h1>Not Found</h1>
    )
}
// navigate component automatically redirect us to another page we use it here so that if we incounter not found it would navigate us back to home page like <Navigate to="/" />
// somethimes we want to navigate people based on form submission eg when they complited a form and they clicked on the submit button they be navigated to the page that they were trying to access by loging in to do that we use the useNavigateHook 