import { useRouter } from 'next/router'

function PortfolioShowPage() {
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    return ( 
        <div>
            <h1>Portfolio Show Page</h1>
        </div>
     );
}

export default PortfolioShowPage;