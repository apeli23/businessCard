import { Details, FormContainer, Inputs, Label } from "../styles/emotion";

export default function UserDetails() {
    return (
        <Details>
            <FormContainer>
                <Inputs>
                    <Label>Name</Label>
                    <Input
                        id="name"
                        placeholder="Full Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </Inputs>
            </FormContainer>
        </Details>
    )
}