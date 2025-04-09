import java.io.*;
import java.util.StringTokenizer;

public class boj_3052 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        boolean [] arr = new boolean[42];

        int cnt = 0;

        for (int i = 0; i < 10; i++) {
            st = new StringTokenizer(br.readLine());

            int N = Integer.parseInt(st.nextToken());
            int A = N % 42;

            if (arr[A] == false) {
                arr[A] = true;
                cnt++;
            }
        }
        bw.write(cnt + "\n");
        bw.flush();
        bw.close();
    }
}
