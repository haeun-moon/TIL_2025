import java.io.*;
import java.util.StringTokenizer;

public class boj_10871 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine() + " " + br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int X = Integer.parseInt(st.nextToken());

        for (int n = 0; n < N; n++) {
            int a = Integer.parseInt(st.nextToken());
            if (a < X) bw.write(a + " ");;
        }

        bw.flush();
        bw.close();
    }
}
