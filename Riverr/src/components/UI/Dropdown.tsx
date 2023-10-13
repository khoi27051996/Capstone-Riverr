import { styled } from 'styled-components'

type DropDownProps = {
    tieuDe: string,
    noiDung1: string,
    noiDung2: string
}
export const Dropdown = ({tieuDe, noiDung1, noiDung2}: DropDownProps) => {
    return (
        <DropDownA>

            <div className="dropdown">
                <button>{tieuDe}</button>
                <div className="dropdown-content">
                    <p>{noiDung1}</p>
                    <p>{noiDung2}</p>
                </div>
            </div>
        </DropDownA>

    )
}

const DropDownA = styled.div`
    .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  transition: all 1s ease-in-out;
  /* position: absolute; */
  /* z-index: 1; */
}

.dropdown:hover .dropdown-content {
  display: block;

}
`


