import { Footer } from "./components/Footer";
import InfoCard from "./components/InfoCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";



const App = () => {
    return (
        <div className="w-screen flex flex-col justify-between items-center">
            <Title/>
            <div className="w-full flex flex-col items-center">
                <SearchBar/>
                <InfoCard/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;