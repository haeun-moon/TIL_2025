import java.io.*;
import java.util.StringTokenizer;

public class boj_2562 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        int max = Integer.MIN_VALUE;
        int cnt = 0;

        for (int i = 1; i <= 9; i++) {
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());

            if (max < n) {
                max = n;
                cnt = i;
            }
        }
        bw.write(max + "\n" + cnt);
        bw.flush();
        bw.close();
    }
}
