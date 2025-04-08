import java.io.*;
import java.util.StringTokenizer;

public class boj_10813 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int [] arr = new int[N+1];

        for (int n = 1; n <= N; n++) {
            arr[n] = n;
        }

        for (int m = 0; m < M; m++) {
            st = new StringTokenizer(br.readLine());

            int i = Integer.parseInt(st.nextToken());
            int j = Integer.parseInt(st.nextToken());

            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }

        for (int n = 1; n <= N; n++) {
            bw.write(arr[n] + " ");
        }

        bw.flush();
        bw.close();
    }
}
