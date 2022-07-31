import { Button } from "@mui/material";
import * as muiStyles from "@mui/material/styles";

export const RegButton = muiStyles.styled(Button)`
    height: 35px;
    width: 150px;

    font-weight: bold;
    font-size: 10pt;

    border-radius: 5px;
    border: 1px solid #40407a;

    margin: 15px 0;

    color:#40407a;
    background-color: #fff;

    transition: all .5s;


    :hover {
        color:#fff;
        background-color: #40407a;

        transition: all .5s;

        border: none;
    }
`;
