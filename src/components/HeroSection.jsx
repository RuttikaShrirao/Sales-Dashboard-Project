// index.css
import NavBar from './NavBar'
import FirstHeroSection from './HeroSectionBlock/FirstHeroSection/FirstHeroSection'
// import SecondHeroSection from './HeroSectionBlock/SecondHeroSection/SecondHeroSection'
// import ThirdHeroSection from  './HeroSectionBlock/ThirdHeroSection/ThirdHeroSection'
export default function HeroSection(){
    return(
        <div className='herosection'>
            <NavBar />
            <div style={{padding:'2%'}}>
            <FirstHeroSection />
            {/* <SecondHeroSection /> */}
            {/* <ThirdHeroSection/> */}
            </div>
        </div>
    )
}