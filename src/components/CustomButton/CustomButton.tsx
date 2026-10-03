// src/components/CustomButton/CustomButton.tsx

import Button from '@mui/material/Button';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
}

export const CustomButton = ({
  label,
  onClick
}: CustomButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};