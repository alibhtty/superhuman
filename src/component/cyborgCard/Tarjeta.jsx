import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function NikeCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardWrapper>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        animate={{
          x: isHovered ? 0 : 50, // Mueve la tarjeta 50px a la derecha
          // Agrega aquí cualquier otra animación que desees
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <CardContainer
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* El resto de tu código aquí */}
        </CardContainer>
      </motion.div>
    </CardWrapper>
  );
}

export default Tarjeta;
