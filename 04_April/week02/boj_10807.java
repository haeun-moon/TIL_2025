import java.io.*;
import java.util.StringTokenizer;

public class boj_10807 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int [] arr = new int [N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int n = 0; n < N; n++) {
            arr[n] = Integer.parseInt(st.nextToken());
        }

        int v = Integer.parseInt(br.readLine());

        int cnt = 0;
        for (int n = 0; n < N; n++) {
            if (arr[n] == v) {
                cnt++;
            }
        }

        bw.write(String.valueOf(cnt));
        bw.close();
    }
}