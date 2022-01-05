import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import Card_1 from '../components/Card_1';
import styled from '@emotion/styled';
import Card_2 from '../components/Card_2';

const Container = styled.div`
  margin-left: 5%;
  margin-top: 1%;
  display:flex;
  flex-wrap: wrap;
`;

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Container>
        <Card_1 />
        <Card_2 />
      </Container>
    </Layout>
  );
}
