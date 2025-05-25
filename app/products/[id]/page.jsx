import { use } from 'react';
import ProductDetailClient from './ProductDetailClient';

export default function ProductPage({ params }) {
    const id = use(params).id;
    
    return <ProductDetailClient productId={id} />;
} 