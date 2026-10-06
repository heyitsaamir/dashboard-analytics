export function DecorativeCat() {
  return (
    <div className="decorative-cat" aria-hidden="true">
      <svg viewBox="0 0 180 170" focusable="false">
        <ellipse className="cat-shadow" cx="94" cy="162" rx="72" ry="8" />
        <path
          className="cat-tail"
          d="M122 139c28 4 48-10 43-33-2-10-9-17-17-19-7-2-11 8-5 12 8 5 10 12 7 18-4 9-15 10-27 8"
        />
        <path
          className="cat-body"
          d="M48 162c-2-35 7-65 36-72 29-7 51 13 52 72H48Z"
        />
        <path
          className="cat-chest"
          d="M83 98c-12 11-14 40-10 64h40c4-25 0-48-12-62-6 5-12 5-18-2Z"
        />
        <path
          className="cat-head"
          d="M40 69 34 28l29 19c9-5 27-6 38 0l31-19-8 43c5 8 7 17 5 26-4 20-23 31-45 30-24-1-42-14-45-34-1-8 0-16 1-24Z"
        />
        <path className="cat-ear" d="m43 42 16 11-14 10-2-21Zm78 0-16 11 13 10 3-21Z" />
        <path className="cat-eye" d="M62 80c5-4 11-4 16 0-5 6-11 6-16 0Zm28 0c5-4 11-4 16 0-5 6-11 6-16 0Z" />
        <circle className="cat-pupil" cx="70" cy="80" r="2.5" />
        <circle className="cat-pupil" cx="98" cy="80" r="2.5" />
        <path className="cat-muzzle" d="M83 88c-5 0-8 3-7 6 1 4 5 6 8 6s7-2 8-6c1-3-3-6-9-6Z" />
        <path className="cat-mouth" d="M84 99v5m0 0c-5 0-8 2-10 5m10-5c5 0 8 2 10 5" />
        <path className="cat-whiskers" d="M66 96 41 91m26 12-27 3m61-10 25-5m-26 12 27 3" />
        <path className="cat-paw" d="M65 162v-19m38 19v-19" />
        <circle className="cat-spark" cx="145" cy="60" r="4" />
        <path className="cat-spark" d="M151 42h14m-7-7v14" />
      </svg>
    </div>
  )
}
