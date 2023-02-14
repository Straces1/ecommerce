import styled from "styled-components"
import CheckOutModal from "./CheckOutModal"

export const StyledCheckOut = styled(CheckOutModal)`
    position: absolute;
    top: -2vh;
    right: 5vw;
    width: 70vw;
    height: 70vh;
    background-color: red;
    z-index: 1;
    border-radius: 10px;
    font-size: .9rem;

    input {
        margin-left: 5px;
        margin-bottom: 10px;
    }
    label {
        margin-left: 10px;
    }

`