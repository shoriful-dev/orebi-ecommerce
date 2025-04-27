import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'

const Shop = () => {
  return (
    <Container>
      <Flex className={"pt-[200px]"}>
        <div className="w-3/12">Shop By Category</div>
        <div className="w-9/12">
        <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
  )
}

export default Shop;
