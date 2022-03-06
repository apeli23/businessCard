import { Address, Back, Brand, CardText, Email, Front, InfoGrid, Name, NameTag, PhoneNumber, TextLg, TextSm } from "../styles/emotion/card1";



export default function FirstCard() {
    return (
        <>
            <Front id="front" ref={frontRef}>
                <InfoGrid>
                    <Name>{name ? name : 'Your Name'}</Name>
                    <Brand>{brand ? brand : 'Company / Brand Name'}</Brand>
                    <Address>
                        <FaMapMarkerAlt id="icon" />
                        <CardText>{location ? location : 'Location'}</CardText>
                    </Address>
                    <PhoneNumber>
                        <FaPhone />
                        <CardText>
                            {phonenumber ? phonenumber : '0700000000'}
                        </CardText>
                    </PhoneNumber>
                    <Email>
                        <FaLaptop />
                        <CardText>{email ? email : 'user@example.com'}</CardText>
                        <CardText>{website ? website : 'website'}</CardText>
                    </Email>
                </InfoGrid>
            </Front>
            <Back id="back" ref={backRef}>
                <NameTag>
                    <TextLg>{name ? name : 'Your Name'}</TextLg>
                    <TextSm>
                        {brand ? brand : 'Company / Brand name'}
                    </TextSm>
                </NameTag>
            </Back>
        </>
    )
}