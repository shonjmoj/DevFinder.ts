import { Footer } from "./components/Footer";
import InfoCard from "./components/InfoCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";



const App = () => {
    return (
        <div className="flex gap-3 flex-col w-full items-center">
            <Title/>
            <SearchBar/>
            <InfoCard/>
            <Footer/>
        </div>
    )
}

export default App;