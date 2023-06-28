import {
  render,
  screen,
  renderHook,
  waitFor,
  useQueryWrapper,
  useCustomHook,
} from "@/tests/test-utils";
import { ExtractScreen } from ".";
import nock from "nock";

describe("ExtractScreen", () => {
  beforeEach(() => {
    nock("http://localhost:3333")
      .persist()
      .get("/api/v1/transactions")
      .reply(200, {
        data: {},
      });
  });

  it("should be able to render ExtractScreen", async () => {
    render(<ExtractScreen />);
    const component = screen.getByTestId("extract-screen");

    const { result } = renderHook(() => useCustomHook(), {
      wrapper: useQueryWrapper,
    });
    await waitFor(() => {
      expect(result.current.data).toBeTruthy();
      expect(component).toBeInTheDocument();
    });
  });
});
