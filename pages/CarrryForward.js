import React from 'react';
import { useRouter } from 'next/router'
function CarrryForward() {
    const router = useRouter()
  console.log(router.query);
    return (
        <div>
            {router.query.title}
        </div>
    );
}

export default CarrryForward;