import Gallery from "./Gallery";
import styled from "styled-components";

export const StyledGallery = styled(Gallery)`
    margin-top: 7vh;
    margin-left: 4vw;
    margin-right: 4vw;
   
    @media (max-width: 523px) {
        margin-top: 0vh;
        margin-left: 0vw;
        margin-right: 0vw;

    }

`
export const NextBtn = styled.button`
    div {
        border-radius: 50%;
        height: 33px;
        width: 33px;
        position: absolute;
        top: 50%;
        right: 3vw;
        transform: translateY(-16px);
        background-color: white;
        cursor: pointer;
    }
    div > img {
        margin-top: 9px;
        width: 10px;
    }
`
export const PrewBtn = styled.button`
    div {
        border-radius: 50%;
        height: 33px;
        width: 33px;
        position: absolute;
        top: 50%;
        left: 3vw;
        transform:  translateY(-16px);
        background-color: white;
        cursor: pointer;
    }
    div > img {
        margin-top: 9px;
        width: 10px;
        transform: rotate(180deg);
    }
`
export const DesktopPreview = styled.img`
    border-radius: 10px;
    width: 100%;
    margin-bottom:20px;
    @media (max-width: 523px) {
            display: none;
        }
`
export const Carousel = styled.div`
    position: relative;
    width: 100vw;
    height: 100vw;
    margin-bottom: 20px;
    @media (min-width: 524px) {
        display: none;
    }
`
export const MobilePreview = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
`
export const Thumbnails = styled.div`
    width: 100%;
        display: flex;
        justify-content: space-between;
        img {
            width: 23%;
            border-radius: 10px;
            &:hover {
            border: 2px solid hsl(26, 100%, 55%);
            }
            &:active {
                opacity: 0.4;

            }
        }
        @media (max-width: 523px) {
            display: none;
        }
`