import { Card } from "./layout/Card";
import { CardContent } from "./layout/CardContent";
import { CardFooter } from "./layout/CardFooter";
import { CardHeader } from "./layout/CardHeader";
import { Text } from "./layout/Text";

export function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <Text>Urubici - PR</Text>
      </CardHeader>
      <CardContent>
        <span style={{ color: "var(--yellow)", fontSize: "50px" }}>19</span>
      </CardContent>
      <CardFooter>Updated at 02:48:32 PM</CardFooter>
    </Card>
  );
}
