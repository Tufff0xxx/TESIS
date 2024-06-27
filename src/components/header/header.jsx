import { HeaderContainer, HeroContainer, HeroImage, HeroText } from "./styles"
import { Navbar } from "../navbar/navbar"

export const Header = () => {
    return (
      <>
        <Navbar></Navbar>
       <HeaderContainer>
        
        
        <HeroContainer>
        
          <HeroText>
        <h1>ABOGADO GABRIEL ALEJANDRO QUEVEDO</h1>
          <p>HONESTIDAD, TRABAJO Y JUSTICIA</p>
          
        </HeroText>
        <HeroImage>
          <img src="quevedo.jpeg" alt="" />
          </HeroImage>      
          
          
          
        </HeroContainer>
       
          
        </HeaderContainer>  
      </>
      
          
        
    )
}