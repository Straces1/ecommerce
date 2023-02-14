import { Link } from "react-router-dom"
export function Home() {
    return (
        <>
        <h1>Home</h1>
        <p>This is the landing page of Sneaker Company Ecommerce, to see the ofer, go to <Link to="/collections">Collections</Link> section</p>
        </>
    )
}