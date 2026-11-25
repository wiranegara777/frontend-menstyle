import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import Image from "next/image"

export default function ProductCard({product}) {

    return (
        <Card sx={{ minWidth: 250 }}>
            <CardMedia sx={{
                position: 'relative',   // required for fill
                height: 220,            // give it a fixed height
                overflow: 'hidden',
            }}>
                <Image
                    src={product?.thumbnail_url}
                    alt="product picture"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
            </CardMedia>
            <Divider />
            <CardContent>
                <Typography variant="h6">{product?.brand?.name}</Typography>
                <Typography variant="body1">{product?.name}</Typography>
                <Typography color="primary" variant="h6" sx={{fontWeight: "bold" }}>Rp {product?.price}</Typography>
            </CardContent>
        </Card>
    )
}