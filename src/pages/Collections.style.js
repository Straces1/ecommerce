import styled from "styled-components";
import { Collections } from "./Collections";

export const StyledCollections = styled(Collections)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 523px) {
        display: block;
    }
`