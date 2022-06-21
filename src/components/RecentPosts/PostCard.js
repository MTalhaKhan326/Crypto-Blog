import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const PostCard = ({post}) => {
  return( 
  <Stack width="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
  <Image src={post.imageUrl} />
  <Stack p="4">
    <Heading fontSize="xl">{post.title}</Heading>
    <Flex>
      <Avatar src={post.avatar} />
      <Text fontWeight="bold" fontSize="md">{post.authorName}</Text>
      <Text>{post.publishDate}</Text>
    </Flex>
    <Text>{post.description}</Text>
     <Flex>
     
      {post.tags.map((tags)=>(
         <Tag>{post.tags}</Tag>
      ))}
      </Flex>     

   <Button alignSelf="flex-end" colorScheme="orange">Read More</Button>

  </Stack>
  </Stack>
  );
};

export default PostCard;
