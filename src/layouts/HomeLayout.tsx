import CenterConsole from "../components/CenterConsole";
import Hero from "../components/Hero";
import Nav from "../components/navigation/Nav";

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Hero />
            <CenterConsole />
        </>
    )
}

export default HomeLayout;