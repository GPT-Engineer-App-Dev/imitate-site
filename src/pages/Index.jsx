import { Container, Text, VStack, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" textAlign="left" mb={4}>
        <Image src="/images/stripe-logo.png" alt="Stripe Logo" width="100px" />
      </Box>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Congratulations Lovable Labs Incorporated!</Text>
        <Text fontSize="lg">You've just received your first payment through Stripe.</Text>
        <Text fontSize="lg">Your first payout for this payment of <strong>$10.00</strong> (minus any fees) should land in your bank account on <strong>12/28/23</strong>.</Text>
      </VStack>
    </Container>
  );
};

export default Index;