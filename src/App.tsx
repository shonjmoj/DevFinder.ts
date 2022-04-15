import { Footer } from "./components/Footer";
import InfoCard from "./components/InfoCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";



const App = () => {
    return (
        <div className="flex flex-col gap-3 w-screen justify-center items-center">
            <Title/>
            <SearchBar/>
            <InfoCard/>
            <Footer/>
        </div>
    )
}

export default App;