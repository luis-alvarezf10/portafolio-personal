import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const CustomDialog = ({ open, onClose, title, message }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <Typography>{message}</Typography>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={onClose}
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #db4648, #fb9553)",
          color: "#fff",
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          px: 2,
        }}
      >
        Cerrar
      </Button>
    </DialogActions>
  </Dialog>
);

export default CustomDialog;
