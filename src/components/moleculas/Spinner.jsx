import { RingLoader } from "react-spinners";
import styled from "styled-components";

export function Spinner({ color = "#48e" }) {
    return (
        <Container>
            <div className="ring-loader">
                <RingLoader color={color} />
            </div>
        </Container>
    );
}

const Container = styled.div`  
    .ring-loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
`;