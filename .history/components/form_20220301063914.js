import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';

<Form>
<FormContainer>
  {othertrial && <FormLabel>Retry...</FormLabel>}
  <Inputs>
    <Label>Name</Label>
    <Input
      id="name"
      placeholder="Full Name"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
    <Label>Company / Business Name</Label>
    <Input
      id="brandname"
      placeholder="company / brnd /name"
      onChange={(e) => {
        setBrand(e.target.value);
      }}
    />
    <Label>Phone Number</Label>
    <Input
      id="phonenumber"
      placeholder="070000000"
      onChange={(e) => {
        setPhoneNumber(e.target.value);
      }}
    />
    <Label>EMAIL</Label>
    <Input
      id="email"
      placeholder="example@test.com"
      onChange={(e) => {
        setEmail(e.target.value);
      }}
    />
    <Label >Location</Label>
    <Input
      id="location"
      type="location"
      placeholder="location"
      onChange={(e) => {
        setLocation(e.target.value);
      }}
    />
    <Label >Website</Label>
    <Input
      id="website"
      type="website"
      placeholder="website"
      onChange={(e) => {
        setWebsite(e.target.value);
      }}
    />
    <FormButton
    //   onClick={submitHandler}
    >
      Submit
    </FormButton>
  </Inputs>
</FormContainer>
</Form>