import java.io.*;
import java.util.StringTokenizer;

public class boj_10818 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine() + " " + br.readLine());

        int N = Integer.parseInt(st.nextToken());

        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int n = 0; n < N; n++) {
            int a = Integer.parseInt(st.nextToken());

            if (a < min) min = a;
            if (a > max) max = a;
        }

        bw.write(min + " " + max);
        bw.flush();
        bw.close();
    }
}
