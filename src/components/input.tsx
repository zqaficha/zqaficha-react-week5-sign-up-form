import { useState, type ChangeEvent, type FormEvent } from "react"
import styled from "styled-components"

type ErrorT = {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    password: boolean,
}

export default function InputForm() {
    const [userInfo, setuserInfo] = useState<{
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    }>(() => {
  const saved = localStorage.getItem("userInfo")

  return saved
    ? JSON.parse(saved)
    : {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
})

    const [errors, seterrors] = useState<ErrorT>({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    })

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setuserInfo({ ...userInfo, [event.target.name]: event.target.value })
    
          const updatedUserInfo = {
        ...userInfo,
        [event.target.name]: event.target.value,
      }

      setuserInfo(updatedUserInfo)

      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo))
    
      }

    const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        seterrors({
            ...errors,
            firstName: !userInfo.firstName,
            lastName: !userInfo.lastName,
            email: !emailRegex.test(userInfo.email),
            password: !userInfo.password,
        })

if (
  !errors.firstName &&
  !errors.lastName &&
  !errors.email &&
  !errors.password
) {
  setuserInfo({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
}
    }

    return (
        <form onSubmit={handleSubmission}>
            <StyledInput>
                <Offer type="button">
                    Try it free 7
                    <span>then $20/mo. thereafter</span>
                </Offer>

                <Inputs errors={errors}>

                    <FirstNameInput
                        error={errors.firstName}
                        type="text"
                        // placeholder="First Name"
                        placeholder={errors.firstName ? "" : "First Name"}
                        name="firstName"
                        value={userInfo.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p style={{ color: "red", fontSize: "10px", marginBottom:"16px", textAlign:"right"  }}>First Name cannot be empty</p>}

                    <LastNameInput
                        error={errors.lastName}
                        type="text"
                        // placeholder="Last Name"
                        placeholder={errors.lastName ? "" : "Last Name"}
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p style={{ color: "red", fontSize: "10px", marginBottom:"16px", textAlign:"right" }}>Last Name cannot be empty</p>}

                    <EmailInput
                    error={errors.email}
                        // placeholder="Email Address"
                         placeholder={errors.email ? "email@example/com" : "Email Address"}
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red", fontSize: "10px",  marginBottom:"16px",  textAlign:"right" }}>Looks like this is not an email</p>}

                    <PasswordInput
                    error={errors.password}
                        type="password"
                        // placeholder="password"
                        placeholder={errors.password ? "" : "password"}
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "10px", textAlign:"right"}}>Password cannot be empty</p>}

                    <Claim type="submit">
                        CLAIM YOUR FREE
                    </Claim>

                    <Footer>
                        By clicking the button, you are agreeing to our
                        <span>Terms and</span>
                    </Footer>
                </Inputs>
            </StyledInput>
        </form>
    )
}

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Offer = styled.button`
  width: 327px;
  height: 88px;
  margin: 0 0 24px;
  padding: 18px 66px 18px 67px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #5e54a4;
  color: #fff;
  border: none;
  cursor: pointer;

  & span {
    color: grey;
    font-weight: 500;
    margin-left: 7px;
  }

  @media (min-width: 1500px) {
    width: 540px;
    height: 60px;
    margin-top: 121px;
    border-radius: 10px;
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
    background-color: #5e54a4;
    border: none;
    color: #fff;
    gap: 3px;
  }
`

const FirstNameInput = styled.input<{ error: boolean }>`
  width: 279px;
  height: 56px;
  /* margin: 0 0 16px; */
  margin-bottom: ${(props) => props.error ? "4px" : "16px"};
  padding: 15px 20px 15px 19.4px;
  border-radius: 5px;
  border: ${(props) => props.error ? "solid 1px red" : "solid 1px #dedede"};
  background-color: #fff;
      &::placeholder {
    color: ${(props) => props.error ? "red" : "#3d3b48"};
  }
    background-image: ${(props) => props.error
    ? `url("/images/icon-error.svg")`
    : "none"};

    background-repeat:no-repeat;
    background-position: right 12px center;
    


  @media (min-width: 1500px) {
    width: 460px;
    height: 56px;
    padding: 15px 20px 15px 32px;
    border-radius: 5px;
  }
`

const LastNameInput = styled.input<{ error: boolean }>`
  width: 279px;
  height: 56px;
  /* margin: 0 0 16px; */
  margin-bottom: ${(props) => props.error ? "4px" : "16px"};
  padding: 15px 20px 15px 19.4px;
  border-radius: 5px;
  border: ${(props) => props.error ? "solid 1px red" : "solid 1px #dedede"};
  background-color: #fff;
      &::placeholder {
    color: ${(props) => props.error ? "red" : "#3d3b48"};
  }
      background-image: ${(props) => props.error
    ? `url("/images/icon-error.svg")`
    : "none"};

    background-repeat:no-repeat;
    background-position: right 12px center;

  @media (min-width: 1500px) {
    width: 460px;
    height: 56px;
    padding: 15px 20px 15px 32px;
    border-radius: 5px;
  }
`

const EmailInput = styled.input<{ error?: boolean }>`
    width: 279px;
  height: 56px;
  /* margin: 0 0 16px; */
  margin-bottom: ${(props) => props.error ? "4px" : "16px"};
  padding: 15px 20px 15px 19.4px;
  border-radius: 5px;
  border: ${(props) => props.error ? "solid 1px red" : "solid 1px #dedede"};
  background-color: #fff;
    &::placeholder {
    color: ${(props) => props.error ? "red" : "#3d3b48"};
  }
      background-image: ${(props) => props.error
    ? `url("/images/icon-error.svg")`
    : "none"};

    background-repeat:no-repeat;
    background-position: right 12px center;

  @media (min-width: 1500px) {
    width: 460px;
    height: 56px;
    padding: 15px 20px 15px 32px;
    border-radius: 5px;
  }
`

const PasswordInput = styled.input<{error ?:boolean}>`
      width: 279px;
  height: 56px;
  /* margin: 0 0 16px; */
  /* margin-bottom: ${(props) => props.error ? "4px" : "16px"}; */
  padding: 15px 20px 15px 19.4px;
  border-radius: 5px;
  border: ${(props) => props.error ? "solid 1px red" : "solid 1px #dedede"};
  background-color: #fff;
  &::placeholder {
    color: ${(props) => props.error ? "red" : "#3d3b48"};
  }
      background-image: ${(props) => props.error
    ? `url("/images/icon-error.svg")`
    : "none"};

    background-repeat:no-repeat;
    background-position: right 12px center;

  @media (min-width: 1500px) {
    width: 460px;
    height: 56px;
    padding: 15px 20px 15px 32px;
    border-radius: 5px;
  }
`

const Inputs = styled.div<{ errors: ErrorT }>`
  width: 327px;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;

  @media (min-width: 1500px) {
    width: 540px;
    margin-top: 24px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  }
`

const Claim = styled.button`
  width: 279px;
  height: 56px;
  margin: 16px 0 8px;
  padding: 15px 45px 15px 44px;
  border-radius: 5px;
  box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
  background-color: #38cc8b;
  color: #fff;
  border: none;
  cursor: pointer;

  @media (min-width: 1500px) {
    width: 460px;
    height: 56px;
    margin: 20px 0 8px;
    padding: 15px 136px 15px 134px;
    border-radius: 5px;
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
    background-color: #38cc8b;
    color: white;
    border: none;
  }
`

const Footer = styled.p`
  margin: 8px 46.5px 0;
  font-size: 11px;
  font-weight: 500;
  line-height: 2.36;
  text-align: center;
  color: #a6a1cf;

  & span {
    font-weight: bold;
    color: #ff7979;
  }
`