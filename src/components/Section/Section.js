import { H2, Sections } from "./Section.styled";


export const Section = ({ title, children }) => {
    return (
        <Sections>
            <H2>{title}</H2>
            {children}
        </Sections >
      )
}