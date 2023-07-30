import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// the way this useNavigate hook works is you can specify a location you want to go to aswell as replace ans state properties
// this is the same as when we want to navigate someone when they submit a form .
// navigate(-1) is like we clicked on the back button, we can pass -2 and so on.
export function NotFound() {
    const navigate = useNavigate();
    // here useNavigate takes no roperties but returns to us a function that we called navigate and this navigate takes two properties first a path and options {} and these options are replace and state 
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