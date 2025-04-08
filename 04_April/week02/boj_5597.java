import java.io.*;
import java.util.StringTokenizer;

public class boj_5597 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        boolean [] arr = new boolean[31];

        for (int i = 1; i <= 28; i++) {
            st = new StringTokenizer(br.readLine());

            int x = Integer.parseInt(st.nextToken());

            arr[x] = true;
        }

        for (int i = 1; i < 31; i++) {
            if (!arr[i]) bw.write(i + "\n");
        }

        bw.flush();
        bw.close();
    }
}
