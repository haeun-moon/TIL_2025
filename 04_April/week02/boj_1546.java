import java.io.*;
import java.util.StringTokenizer;

public class boj_1546 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());

        int max = 0;
        double avg = 0;

        st = new StringTokenizer(br.readLine());

        for (int n = 1; n <= N; n++) {

            int A = Integer.parseInt(st.nextToken());

            avg += A;

            max = Math.max(max, A);
        }
        bw.write(avg / (max * N) * 100 + "\n");
        bw.flush();
        bw.close();
    }
}
