import { Container, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  ({ typography: { pxToRem, ...typography }, ...theme }) => createStyles({})
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

export { Layout };
