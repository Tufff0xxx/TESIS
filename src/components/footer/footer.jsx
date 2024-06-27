import React from 'react'
import { FooterContainer } from './styles'
import { ImageContainer } from './styles'
export const Footer = () => {
  return (
    <FooterContainer>
        <h2>Copyright © 2024 Estudio Jurídico Quevedo & Asociados - Cordoba</h2>
        <ImageContainer>
        <img src="/instagram.png" alt="" />
        <img src="/facebook.png" alt="" />
        <img src="/whatsapp.jpg" alt="" />
        <img src="/twitter.webp" alt="" />
        </ImageContainer>
        
    </FooterContainer>
  )
}
