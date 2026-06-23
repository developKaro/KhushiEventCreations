import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SummaryCard.css";

const SummaryCard = ({ title, value }) => {
  return (
    <Card className="summary-card">
      <CardContent>
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          className="summary-card-value"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;